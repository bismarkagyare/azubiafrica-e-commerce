type CategoryHeaderProps = {
  title: string;
};

const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-32 md:h-65 bg-secondary-blackish">
      <h1 className="text-4xl tracking-wide uppercase font-medium text-center text-white">{title}</h1>
    </div>
  );
};

export default CategoryHeader;
