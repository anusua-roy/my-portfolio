// scripts/seedDatabase.js

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

// Read service account manually
const serviceAccount = JSON.parse(
    readFileSync("./scripts/serviceAccountKey.json", "utf8")
);

import {
    heroSection,
    experience,
    education,
    siteMetadata,
    socialLinks,
    navLinks,
    certifications,
    awards,
    skills,
} from "./seedData.js";

initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

async function seedHeroSection() {
    const ref = db.collection("details").doc("heroSection");
    await ref.set(heroSection);
    console.log("✅ Seeded /details/heroSection");
}

async function seedCollection(collectionName, dataArray) {
    const batch = db.batch();

    dataArray.forEach((item, idx) => {
        const ref = db.collection(collectionName).doc(`${collectionName}-${idx}`);
        batch.set(ref, item);
    });

    await batch.commit();
    console.log(`✅ Seeded /${collectionName}`);
}

async function seedSiteMetadata() {
    const ref = db.collection("siteMetadata").doc("meta");
    await ref.set(siteMetadata);
    console.log("✅ Seeded /siteMetadata");
}

async function main() {
    try {
        await seedHeroSection();
        await seedCollection("experience", experience);
        await seedCollection("education", education);
        await seedCollection("socialLinks", socialLinks);
        await seedCollection("navLinks", navLinks);
        await seedCollection("certifications", certifications.map(name => ({ name })));
        await seedCollection("awards", awards);
        await seedCollection("skills", skills);
        await seedSiteMetadata();

        console.log("\n🎉 All data seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("\n❌ Seeding failed:", error);
        process.exit(1);
    }
}

main();
