interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <h1 className="uppercase font-bold text-center text-2xl md:text-3xl md:mb-20">
        {title}
    </h1>
  )
}

export default Title