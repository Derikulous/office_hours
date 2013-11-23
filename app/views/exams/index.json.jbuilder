json.array!(@exams) do |exam|
  json.extract! exam, :name, :description
  json.url exam_url(exam, format: :json)
end
