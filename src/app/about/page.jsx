export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        About AZ Shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* About Image */}
        <div>
          <img
            src="/6568.webp"
            alt="About AZ Shop"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        {/* About Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to AZ Shop
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At AZ Shop, we believe in providing the best shopping experience
            with quality products, competitive prices, and excellent customer
            service. Founded in 2024, AZ Shop has grown into a trusted
            e-commerce destination for millions of customers.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to bring you a wide range of products, from
            electronics and fashion to home essentials and more, all at
            unbeatable prices. We are committed to making your shopping journey
            seamless, secure, and enjoyable.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Join us in our journey to redefine online shopping. We’re here to
            make your life better, one product at a time.
          </p>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/arbazmurme.webp"
              alt="Arbaz Murme"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Arbaz Murme</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="/mmmm.webp"
              alt="Jane Smith"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
          <div className="text-center">
            <img
              src="/young-bearded-man-with-striped-shirt.webp"
              alt="Sam Wilson"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Sam Wilson</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
