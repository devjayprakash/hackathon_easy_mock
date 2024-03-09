import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container min-h-screen mx-auto">
      <div className="h-screen flex items-center p-4 flex-col-reverse md:flex-row gap-6  justify-center">
        <div className="w-full md:w-1/2 text-center">
          <h1 className="md:text-5xl text-3xl font-bold">
            Welcome to <span className="text-violet-700">Easy Papers</span>
          </h1>
          <p className="md:text-lg prose-gray text-wrap mt-2">
            Simple app to generate mock tests and papers for students and
            teachers
          </p>
          <div className="flex gap-2 mt-6 justify-center">
            <Link href={'/sign_up'}>
              <Button size="large" type="primary" className="mt-3">
                Start Creating Papers
              </Button>
            </Link>
            <Link href={'/learn_more'}>
              <Button size="large" className="mt-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Image width={300} height={300} src={'/test.svg'} alt="Test mocks" />
        </div>
      </div>
    </div>
  );
}
