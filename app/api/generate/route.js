import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json()

        const client = await clientPromise
        const db = client.db("shorturl")
        const collection = db.collection("url")

        const doc = await collection.findOne({
            shorturl: body.shorturl
        })

        if (doc) {
            return Response.json({
                success: false,
                error: true,
                exists: true,
                message: "This short URL already exists.",
                shorturl: doc.shorturl,
            });
        }

        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })

        return Response.json({
            success: true,
            error: false,
            message: "URL generated successfully"
        })

    } catch (error) {
        console.error("Generate URL Error:", error)

        return Response.json(
            {
                success: false,
                error: true,
                message: "Unable to create short URL"
            },
            { status: 500 }
        )
    }
}