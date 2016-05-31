task :parse do
  require 'csv'
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

  puts data.inspect
end
