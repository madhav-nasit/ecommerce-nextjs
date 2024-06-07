import { AuthPage, ThemeToggle } from 'components';

const SignInLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  const imageAssets = {
    src: '/iphone.png',
    srcSet: '/iphone@2x.png 2x, /iphone@3x.png 3x',
  };
  return <AuthPage imageAssets={imageAssets}>{children}</AuthPage>;
};

export default SignInLayout;
