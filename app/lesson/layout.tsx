type Props = {
  children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-full">
      {' '}
      {/* Fixed hfull to h-full */}
      <div className="flex flex-col h-full w-full">
        {children} {/* Render the children passed to this layout */}
      </div>
    </div>
  );
};

export default LessonLayout;
