import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {const images = [
  { src: `${process.env.PUBLIC_URL}/assets/radiology1.jpg`, caption: 'High-Resolution MRI Scanner' },
  { src: `${process.env.PUBLIC_URL}/assets/radiology2.jpg`, caption: 'Advanced CT Imaging' },
  { src: `${process.env.PUBLIC_URL}/assets/radiology3.jpg`, caption: 'Modern Ultrasound Machine' },
];


  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12 col-md-10">
            <h2 className="fw-bold mb-3">VISMIT RADIOLOGY CENTER</h2>
            <p className="text-muted">
              We offer state-of-the-art radiology services including X-ray, MRI, CT Scan, and Ultrasound.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="position-relative">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="img-fluid rounded w-100"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-50 text-white py-2 text-center small">
                      {image.caption}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-10">
            <h3 className="fw-bold mb-3">Quality Care at Your Doorstep</h3>
            <p className="text-muted mb-4">
              At <strong>Vismit Radiology Services</strong>, we specialize in providing
              <strong> portable X-Ray</strong> and <strong>ECG services</strong> directly at your home.
              Experience safe, hygienic, and hassle-free diagnostic services with our friendly and
              professional staff.
            </p>
            <div className="row text-start mb-4">
              <div className="col-12 col-md-6">
                <ul className="list-unstyled small">
                  <li>✅ Home X-Ray Services</li>
                  <li>✅ Home ECG Services</li>
                  <li>✅ Doctor Consultation Available</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul className="list-unstyled small">
                  <li>✅ Hygiene & Safety Guaranteed</li>
                  <li>✅ Friendly & Skilled Staff</li>
                  <li>✅ Fast & Accurate Reports</li>
                </ul>
              </div>
            </div>
            <p className="fw-semibold mb-3">Book Your Home X-Ray or ECG Today!</p>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
              <a href="tel:+919XXXXXXXXX" className="btn btn-primary w-100 w-md-auto">📞 Call Now</a>
              <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-success w-100 w-md-auto">📱 WhatsApp Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
