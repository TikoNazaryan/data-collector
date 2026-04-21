import { Rocket01 } from "@untitledui/icons";

import { Button } from "@/components/base/buttons/button";

export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-secondary px-6 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold text-brand-secondary">
          Untitled UI
        </p>
        <h1 className="mt-2 text-display-sm font-semibold text-primary md:text-display-md">
          React + Webpack + Tailwind
        </h1>
        <p className="mt-3 text-md text-tertiary">
          Official theme tokens, typography, and a Button from the open-source
          Untitled UI React library.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button color="primary" iconLeading={Rocket01}>
          Primary sdfsd
        </Button>
        <Button color="secondary" iconLeading={Rocket01}>
          Secondary
        </Button>
        <Button color="tertiary">Tertiary</Button>
      </div>
    </main>
  );
}
