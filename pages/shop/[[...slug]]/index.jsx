import { useRouter } from 'next/router'

import ShopLayout from '@/components/ShopLayout';

export default function ShopDetailsPage(params) {
    const router = useRouter();
    const { pathname, query } = router;

    console.log(query);

    return (
        <>
            <h1>Shop Details Page</h1>
            <ul>
                <li>Pathname: {pathname}</li>
                <li>Query: {Object.keys(query).length === 0 ? 'empty' : `${query.slug[0]}/${query.slug[1]}...`}</li>
            </ul>
        </>
    );
}

ShopDetailsPage.getLayout = function getLayout(page) {
    return <ShopLayout>{page}</ShopLayout>;
  };