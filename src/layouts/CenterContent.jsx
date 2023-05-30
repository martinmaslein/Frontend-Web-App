function CenterContent({ children }) {
    return (
      <div className="min-h-screen mt-16 transition-colors bg-neutral-50 dark:bg-slate-800">
        <div className="sm:w-4/5 w-full min-h-screen h-fit p-4 pt-5 m-auto space-y-4 shadow-lg transition-colors bg-neutral-300 dark:bg-slate-700 text-black dark:text-white">
          {children}
        </div>
      </div>
    );
  }
  
export default CenterContent;