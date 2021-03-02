require 'nokogiri'
require 'open-uri'

url = "http://kiyothink.starfree.jp/test_scraping/"

charset = nil
html = open(url) do |f|
  charset = f.charset
  f.read
end
doc = Nokogiri::HTML.parse(html, nil, charset)
p doc.title