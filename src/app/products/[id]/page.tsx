import { client } from "@/lib/sanityClient";

async function getProductData(id: string) {
  const res = await client.fetch(`*[_type=="product" && _id=='${id}']{
            title,
            id,
            images,
        }`);
  return res;
}

interface Params {
  params: {
    id: string
  }
}
export default async function ProductPage({ params: { id } }: Params) {

  const data = await getProductData(id)

  return (
    <div>{data.title}</div>
  )
}