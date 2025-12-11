import SurveyForm from "@/components/survey-form"
import { poetsen_one } from "@/config/fonts"

export default function SurveyPage() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className={`text-5xl font-bold text-accent leading-tight ${poetsen_one.className}`}>Client Discovery Survey</h1>
            <h2 className="text-3xl text-primary font-['Poetsen_One']">Help us understand your needs so we can deliver the perfect solution</h2>
          </div>

          <SurveyForm />
        </div>
      </div>
    </div>
  )
}
