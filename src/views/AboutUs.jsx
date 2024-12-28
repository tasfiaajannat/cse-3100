import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us text-start mt-4">
      <div className="container">
        <section className="mb-4">
          <h2>Our mission</h2>
          <p>
            At Purrfect Adoption, our mission is to provide loving homes for cats in need. We believe that every cat deserves a safe and caring environment where they can thrive. Our goal is to match
            each cat with the perfect family, ensuring a lifetime of happiness and companionship for both the cat and their new owners. We are dedicated to promoting responsible pet ownership and
            educating the community about the joys and responsibilities of adopting a cat.
          </p>
        </section>
        <section className="mb-4">
          <h2>Our history</h2>
          <p>
            Purrfect Adoption was founded in 2010 by a group of passionate cat lovers who wanted to make a difference in the lives of homeless cats. Over the years, we have grown from a small
            volunteer-based organization to a well-established adoption center with a network of foster homes and dedicated volunteers. Our journey has been filled with countless success stories of
            cats finding their forever homes. We are proud of the impact we have made and continue to strive towards a future where every cat has a loving home.
          </p>
        </section>
        <section>
          <h2>Our team</h2>
          <div className="row g-4 cats-container" id="cats-container">
            <div className="col-md-4">
              <div className="cat-card">
                <img src="path/to/image1.jpg" alt="Bob Doe" className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">Bob Doe</h3>
                  <p className="mb-0">Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <img src="path/to/image2.jpg" alt="Rob Doe" className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">Rob Doe</h3>
                  <p className="mb-0">Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <img src="path/to/image3.jpg" alt="Dob Doe" className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">Dob Doe</h3>
                  <p className="mb-0">Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;