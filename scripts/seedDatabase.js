// scripts/seedDatabase.js

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

// Load Service Account
const serviceAccount = JSON.parse(
    readFileSync("./scripts/serviceAccountKey.json", "utf8")
);

// Load your seed data
import {
    heroSection,
    siteMetadata,
    projects,
    skills,
    certifications,
    awards,
    education,
    experience,
    navigation,
    socialLinks,
} from "./seedData.js";

initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

async function deleteCollection(collectionName) {
    const ref = db.collection(collectionName);
    const snapshot = await ref.get();

    const batch = db.batch();
    snapshot.forEach((doc) => {
        batch.delete(doc.ref);
    });

    if (!snapshot.empty) {
        await batch.commit();
        console.log(`🧹 Deleted /${collectionName}`);
    }
}

async function seedCollection(collectionName, dataArray) {
    const batch = db.batch();

    dataArray.forEach((item) => {
        const ref = db.collection(collectionName).doc(); // Auto-ID
        batch.set(ref, item);
    });

    await batch.commit();
    console.log(`✅ Seeded /${collectionName}`);
}

async function seedFixedDoc(collectionName, docId, dataObject) {
    const ref = db.collection(collectionName).doc(docId);
    await ref.set(dataObject);
    console.log(`✅ Seeded /${collectionName}/${docId}`);
}

async function main() {
    try {
        console.log("🧹 Cleaning old collections...");
        await Promise.all([
            deleteCollection("projects"),
            deleteCollection("skills"),
            deleteCollection("certifications"),
            deleteCollection("awards"),
            deleteCollection("education"),
            deleteCollection("experience"),
            deleteCollection("navigation"),
            deleteCollection("socialLinks"),
        ]);

        console.log("🌱 Seeding fresh data...");
        await Promise.all([
            seedFixedDoc("details", "heroSection", heroSection),
            seedFixedDoc("details", "siteMetadata", siteMetadata),
            seedCollection("projects", projects),
            seedCollection("skills", skills),
            seedCollection("certifications", certifications),
            seedCollection("awards", awards),
            seedCollection("education", education),
            seedCollection("experience", experience),
            seedCollection("navigation", navigation),
            seedCollection("socialLinks", socialLinks),
        ]);

        console.log("\n🎉 All data seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("\n❌ Seeding failed:", error);
        process.exit(1);
    }
}

main();
