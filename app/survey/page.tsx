import SurveyForm from "@/components/survey-form"

export default function SurveyPage() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-accent mb-3">
              Client Discovery Survey
            </h2>
            <p className="text-primary text-lg">
              Help us understand your needs so we can deliver the perfect solution
            </p>
          </div>

          <SurveyForm />
        </div>
      </div>
    </div>
  )
}
