import "../styles/card.css";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({
  title,
  description
}: CardProps) {

  return (

    <div className="card">

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

    </div>

  );

}