#!/usr/bin/env ruby

require "fileutils"
require "time"
require "yaml"
require "pry"

YAML_FRONT_MATTER_REGEXP = /\A(---\s*\n.*?\n?)^((---|\.\.\.)\s*$\n?)/m

def extract_frontmatter(doc)
  # frontmatter is between the two sentinals '---' at the beginning of the file
  if doc =~ YAML_FRONT_MATTER_REGEXP
    fm, body = YAML.load($1), Regexp.last_match.post_match
  end
  [fm, body]
end

def convert_frontmattter(fm)
  new_fm = fm.dup
  new_fm.delete("layout")
  new_fm.delete("categories")
  new_fm.delete("category")
  date = new_fm.delete("date")
  if date
    if date.class == String
      date = Time.parse(date)
    end
    new_fm["date"] = date.xmlschema
  end
  source = new_fm.delete("external_url")
  if source
    new_fm["source"] = source
  end
  new_fm
end

def write_doc(fm, body, filename)
  out = YAML.dump(fm)
  out += "---\n"
  out += body
  File.write(filename, out)
end

ARGV.each do |fn|
  doc = File.read fn
  FileUtils.cp fn, "#{fn}.bak"
  fm, body = extract_frontmatter doc
  new_fm = convert_frontmattter fm
  write_doc(new_fm, body, fn)
end
