interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <h1 className="uppercase font-extrabold font-poppins text-center text-xl md:text-4xl ">
        {title}
    </h1>
  )
}

export default Title