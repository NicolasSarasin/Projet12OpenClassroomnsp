export default async function ReceptAPI() {
    try {
        const response = await fetch('data.js');
        if (!response.ok) {
            throw new Error('Erreur de réseau');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Il y a eu un problème avec la récupération des données:', error);
    }
}