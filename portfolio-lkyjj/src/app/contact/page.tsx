import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">联系我</h1>
          <p className="text-gray-600">期待与你的合作</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}