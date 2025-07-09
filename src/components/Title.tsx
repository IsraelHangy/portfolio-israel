interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <h1>
        {title}
    </h1>
  )
}

export default Title