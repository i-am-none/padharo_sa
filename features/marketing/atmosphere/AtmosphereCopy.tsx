type AtmosphereCopyProps = {
  text: string;
};

export function AtmosphereCopy({ text }: AtmosphereCopyProps) {
  return (
    <p className="text-atmosphere-copy" data-atmosphere-copy>
      {text}
    </p>
  );
}
