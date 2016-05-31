task :parse do
  require 'csv'
  require 'fileutils'
  require 'active_support/all'

  data = {}
  estado = ''
  path = ''

  csv_text = File.read('candidatos.csv')
  csv = CSV.parse(csv_text)
  csv.each do |row|
    key = row[0]
    partido = row[1]
    candidato = row[2]
    url = row[3]

    unless key.blank?
      estado = key
      next
    end
    if partido.present? and candidato.blank?
      path = "#{estado}/#{partido}"
      next
    end
    next if url.blank?

    data[path] = [] if data[path].nil?

    data[path] << {
      :partido => partido,
      :candidato => candidato,
      :url => url,
    }
  end

  data.each do |path, data|
    path = path.split("/").map(&:parameterize).join("/")
    FileUtils.mkdir_p path

    data.each do |info|
      ['1366x768', '320x568'].each do |viewport|
        _path = "#{path}/#{"#{info[:partido]} #{info[:candidato]} #{viewport}".parameterize}.png"
        system "phantomjs screenshot.js #{info[:url].inspect} #{_path.inspect} #{viewport}"
      end
    end
  end
end
