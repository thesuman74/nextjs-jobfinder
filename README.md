This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Submitting form data

1. Create a form with name field and action and pass a function in action field

```html
<form action="{FormAction}">
  <input type="text" name="name" />
</form>
```

2. Create a function to accept form values and pass formdata with the interface of type _FormData_ , For example

```tsx
const FormAction = async (formData: FormData) => {};
```

3. use variables to store the formData and another variable to send them to json

```tsx
const name = formData.get("name");
const vacancies = Number(formData.get("vacancies")) || 0;
```

4. use fetch with method as POST and in body pass the datas as string to store in local endpoint i.e db.json

```tsx
const res = await fetch("http://localhost:8000/popularvacancies", {
  method: "POST",
  body: JSON.stringify(datas),
  headers: {
    "Content-Type": "application/json",
  },
});
```

- Note : start the json server with **json-server --watch db.json --port 8000** before entering/accessing data
