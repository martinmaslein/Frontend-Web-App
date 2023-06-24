function BrickLayout({ title, content, buttons }) {
    return (
      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        <p className="text-2xl font-bold">{title}</p>
        {content}
      </div>
    );
  }
  
  export default BrickLayout;
  