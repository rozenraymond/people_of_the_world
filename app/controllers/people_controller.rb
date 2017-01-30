class PeopleController < ApplicationController
  def index
    @people = Person.order("RANDOM()").where(:country => "Australia").take(100)

    respond_to do |format|
      format.html
      format.json {render json: @people}
    end
  end

  def create
    @person = Person.create person_params
    redirect_to person
  end

  def edit
  end

  def new
    @person = Person.new
  end

  def update
  end

  def show
    @people = Person.order("RANDOM()").where(:country => params[:country]).take(6)
  end

  private
    def person_params
      params.require( :person).permit(:country, :latitude, :longtitude, :language, :income, :sex, :religion, :dob, :internet, :age, :openness, :conscientiousness, :extraversion, :agreeableness, :neurotism)
    end

end
