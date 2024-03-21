type Section = {
    title: string
    children: string
}

const Section = ({ title, children }) => {
  return (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
    
  )
}

export default Section