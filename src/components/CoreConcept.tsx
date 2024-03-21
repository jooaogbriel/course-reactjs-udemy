export type Core2 = {
    title: string;
    description: string;
    image: string;
  }
  

export const CoreConcept = ({ image, title, description}:Core2) => {
  return (
    <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  )
}
