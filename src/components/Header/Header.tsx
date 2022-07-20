import { tw } from 'twind/css';

const Header = () => (
  <header className={tw(`bg-white border-slate-300 border-b`)}>
    <div className={tw(`max-w-4xl mx-auto py-8 px-6 lg:px-16`)}>
      <h1 className={tw(`font-semibold text-3xl md:text-4xl lg:text-5xl text-left`)}>Gift Card</h1>
    </div>
  </header>
);

export default Header;
