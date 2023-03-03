# Sandra's UX Design Portfolio

## Made with Next.js, Material UI React, and TypeScript

This portfolio is based on the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) from Vercel plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

## Deployment

[https://sandra-benito-portfolio.vercel.app/](https://sandra-benito-portfolio.vercel.app/)


# Dependencies
[Next.js v13](https://github.com/vercel/next.js/)

[Embla Carousel](https://www.embla-carousel.com/)

[Material UI React v5](https://mui.com/)

[remark-html](https://github.com/remarkjs/remark-html)

[Typescript](https://github.com/microsoft/TypeScript)

[Tailwind CSS](https://tailwindcss.com/)

# Set up and installation

## Install NVM

Install the node version manager in case you need to upgrade node's version in the future.

[NVM](https://github.com/nvm-sh/nvm)

## Install PNPM

This is a package manager, which will manage your dependencies for you and keep the project up to date. PNPM is currently the fastest one, so run

```
npm install -g pnpm
```

The -g flag indicates this is a global install, i.e. it will install system-wide.

## Setup

```
pnpm i
pnpm run dev
```

The site will be start on [http://localhost:3000](http://localhost:3000). If it doesn't work, leave me a comment on this repo or submit a pull request.

Build the webapp for production with:
```
pnpm build
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Git

To use Git you'll need to install it first, you can do so [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Once installed, you need to go and download [Visual Studio Code](https://code.visualstudio.com/). This isn't technically required to use Git but it will make it a lot easier.

And after that go download [GitHub Desktop](https://desktop.github.com/). This will help get the initial setup out of the way.

Now, assuming everything is installed, you need open a terminal in the directory where the project is located. If you've opened the project in VS Code already, great! VS Code will navigate you to the correct place automatically. From here, making a Git commit isn't as hard as you might think.

The first thing you always do when you open a project is **pull**. This ensures that if anyone else has worked on the project your local copy is up to date. 

```
git pull
```

If it says everything up to date, then you are good to go.

In order to start making changes, first you need to tell Git that you want to push all changes you have to the cloud. To do this we write

```
git add .
```

That period after the add indicates to scan the whole project for recent changes. 

Next we need to start the preparations to push changes. We need to tell Git what we are doing, and if it's not a super important change feel free to say that it's "minor fixes" or something to that effect. The more specific you can be the better though.

```
git commit -m "my first commit"
```

This will bundle all the changes you made to make them ready to go to the cloud. 

Finally, we need to tell Git to push out these changes since they're ready to go. 

```
git push
```

This will push the changes to the cloud, and Vercel will automatically deploy them in about 2 minutes. And that's it!