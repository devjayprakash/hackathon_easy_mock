import Image from 'next/image';

function LearnMorePage() {
  return (
    <div className="pt-20 container mx-auto">
      <div className="mt-16">
        <Image
          src="/test.svg"
          alt="Test mocks"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className="text-3xl font-bold mt-3">About us</div>
        <p className="text-xl">
          Easy Papers is a simple app to generate mock tests and papers for
          students and teachers. You can create papers and tests for your
          students and share them with them. You can also create papers for
          yourself to practice.
        </p>
      </div>
    </div>
  );
}

export default LearnMorePage;
