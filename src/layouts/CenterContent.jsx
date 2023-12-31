function CenterContent({ children }) {
    return (
      <div className="bg-white">
		   <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 ">
          {children}
        </div>
      </div>
    );
  }
  
export default CenterContent;