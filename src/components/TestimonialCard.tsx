interface TestimonialCardProps {

  profile: string;

  testimony: string;

  name: string;

  role: string;

  stars: number;

  star: string;

  starOuter: string;

}

export default function TestimonialCard({

  profile,

  testimony,

  name,

  role,

  stars,

  star,

  starOuter,

}: TestimonialCardProps) {

  return (

    <div className="carousel-card">

      <img
        src={profile}
        alt="Imagem perfil cliente"
      />

      <span className="testimony">

        <p>
          {testimony}
        </p>

      </span>

      <span className="rating">

        {[...Array(stars)].map((_, index) => (

          <img
            key={index}
            src={star}
            width={22}
            height={20}
          />

        ))}

        {[...Array(5 - stars)].map((_, index) => (

          <img
            key={`empty-${index}`}
            src={starOuter}
            width={20}
            height={22}
          />

        ))}

      </span>

      <span className="names">

        <p>
          {name}
        </p>

        <p>
          {role}
        </p>

      </span>

    </div>

  );

}