require 'rails_helper'

RSpec.describe "rates/new", :type => :view do
  before(:each) do
    assign(:rate, Rate.new(
      :price_notation => 1
    ))
  end

  it "renders new rate form" do
    render

    assert_select "form[action=?][method=?]", rates_path, "post" do

      assert_select "input#rate_price_notation[name=?]", "rate[price_notation]"
    end
  end
end
