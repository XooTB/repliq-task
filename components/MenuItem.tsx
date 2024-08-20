const MenuItem = ({
  name,
  icon,
  link,
}: {
  name: string;
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <a href={link}>
      <div
        key={name}
        className="flex items-center gap-4 hover:text-white hover:bg-slate-300 px-2 py-3 rounded-lg hover:cursor-pointer"
      >
        {icon}
        {name}
      </div>
    </a>
  );
};

export default MenuItem;
