import React from "react";
import {
  Users,
  BarChart2,
  Globe,
  Shield,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            <Users size={16} className="mr-2" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Empowering Businesses with{" "}
            <span className="text-blue-600">AI-Driven SEO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            At Naiyo24, we're revolutionizing how companies approach search
            engine optimization through cutting-edge artificial intelligence and
            data analytics.
          </p>
        </div>
      </Container>

      {/* Mission Section */}
      <div className="bg-blue-50 py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize advanced SEO tools and make them accessible to
                businesses of all sizes, helping them compete in today's digital
                landscape.
              </p>
              <p className="text-lg text-gray-600">
                We believe every company deserves to be found online, regardless
                of their marketing budget or technical expertise.
              </p>
            </div>
            <div className="relative h-64 md:h-80 bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-[80px] opacity-30"></div>
              <div className="relative h-full flex items-center justify-center p-8">
                <Rocket
                  size={80}
                  className="text-blue-600 animate-float"
                  style={{ animationDuration: "6s" }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Team Section */}
      <Container className="py-16 md:py-24">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse group of SEO experts, data scientists, and software
            engineers passionate about delivering results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "CEO & Founder",
              bio: "SEO veteran with 12+ years experience helping Fortune 500 companies rank higher.",
              img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
            },
            {
              name: "Sarah Chen",
              role: "Lead Data Scientist",
              bio: "Machine learning specialist focused on search algorithm patterns.",
              img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
            },
            {
              name: "Michael Rodriguez",
              role: "Head of Product",
              bio: "Transforms complex SEO concepts into intuitive product features.",
              img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            },
            {
              name: "Priya Patel",
              role: "Customer Success",
              bio: "Ensures every client achieves their digital marketing goals.",
              img: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Values Section */}
      <div className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Naiyo24
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 size={32} className="text-blue-600" />,
                title: "Data-Driven",
                description: "We let numbers guide our decisions, not hunches.",
              },
              {
                icon: <Globe size={32} className="text-teal-600" />,
                title: "Transparency",
                description:
                  "No black boxes - we explain how our technology works.",
              },
              {
                icon: <Shield size={32} className="text-purple-600" />,
                title: "Integrity",
                description:
                  "White-hat techniques only. No shortcuts that risk your reputation.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <Container className="py-16 md:py-20">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-[80px]"></div>
          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your SEO Strategy?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Join 2,500+ businesses already using Naiyo24 to dominate their
                search rankings.
              </p>
              <div className="w-full md:w-auto">
                {" "}
                {/* Added wrapper div for better centering control */}
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-white/20 border-white text-white group"
                  onClick={() => {
                    const pricingSection = document.getElementById("pricing");
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Start Your Free Trial
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
