import { useRouter } from 'next/router'

export default function UserDetailsPage() {
    const router = useRouter();
    const { pathname, query } = router;

    console.log(router);

    return (
        <>
            <h1>User Details Page</h1>
            <ul>
                <li>Pathname: {pathname}</li>
                <li>Query: {Object.keys(query).length === 0 ? 'empty' : query.id}</li>
            </ul>
        </>
    );
}