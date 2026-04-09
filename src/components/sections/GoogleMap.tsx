const GoogleMap = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Visit ERITAGE ENT CARE - ENTEBBE</h2>
          <p className="text-lg text-muted-foreground">
            Along Entebbe Road, Entebbe, Central Region, Uganda
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7584444444444!2d32.4580556!3d0.0527778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8a4b5c6d7e8f%3A0x1234567890abcdef!2sEritage%20Ear%2C%20Nose%20and%20throat%20home%20%E2%80%93Entebbe%20road!5e0!3m2!1sen!2sug!4v1701907200000!5m2!1sen!2sug"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ERITAGE ENT CARE - ENTEBBE Location Map"
            aria-label="Google Maps showing ERITAGE ENT CARE - ENTEBBE clinic location along Entebbe Road"
          ></iframe>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground mb-2">ERITAGE ENT CARE - ENTEBBE</p>
          <a
            href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Get Directions to ERITAGE ENT CARE - ENTEBBE →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;