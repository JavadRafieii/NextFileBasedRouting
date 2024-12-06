import { useRouter } from 'next/router'

export default function PostsDetailsPage() {
    const router = useRouter();
    const { pathname, query } = router;

    console.log(query);

    return (
        <>
            <h1>Post Details Page</h1>
            <ul>
                <li>Pathname: {pathname}</li>
                <li>Query: {Object.keys(query).length === 0 ? 'empty' : `${query.id[0]}/${query.id[1]}...`}</li>
            </ul>
        </>
    );
}