# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :view do
    name "MyString"
    body "MyText"
    user nil
  end
end
