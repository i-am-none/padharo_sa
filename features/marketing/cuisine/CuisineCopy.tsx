type CuisineCopyProps = {
  copy: string;
};

export function CuisineCopy({ copy }: CuisineCopyProps) {
  return (
    <p className="cuisine-copy" data-cuisine-copy>
      {copy}
    </p>
  );
}
