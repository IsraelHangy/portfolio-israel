interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <h1 className="uppercase font-extrabold font-poppins text-center text-2xl md:text-4xl md:mb-10">
        {title}
    </h1>
  )
}

export default Title