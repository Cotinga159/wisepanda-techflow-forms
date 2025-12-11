"use strict";

/**
 * 📝 Configuration centralisée pour la validation des formulaires
 * Ce fichier contient tous les messages, règles et constantes
 * Facilite la maintenance et la cohérence du projet
 */

/**
 * 💬 Messages d'erreur par champ et type de validation
 * Organisation hiérarchique : champ > type d'erreur > message
 */
export const validationMessages = {
  // TODO: Compléter les messages d'erreur pour chaque formulaire
  // Structure attendue : nomDuChamp: { typeErreur: "message" }

  // 📧 Formulaire de contact
  name: {
    required: "Le nom est vide",
    minLength: "Nom trop court, il faut aux minimum 2 caractères"
    // TODO: Ajouter les messages pour :
    // - required: quand le nom est vide
    // - minLength: quand le nom est trop court
    // Hint: Soyez précis sur le nombre de caractères minimum
  },

  email: {
    required: "L'email est vide",
    invalid: "L'email est incorrect"
    // TODO: Ajouter les messages pour :
    // - required: quand l'email est vide
    // - invalid: quand le format email est incorrect
  },

  subject: {
    required: "Le sujet du message est vide",
    minLength: "Le sujet n'a pas assez de caractères"
    // TODO: Messages pour le sujet du message
    // - required et minLength
  },

  message: {
    required: "Le message est vide",
    minLength: "Le message dois au moins faire plus de 3 caractère"
    // TODO: Messages pour le contenu du message
    // - required et minLength (plus long qu'un nom)
  },

  // 👤 Formulaire d'inscription
  username: {
    required: "Le nom d'utilisateur est vide",
    minLength: "Le nom d'utilisateur est trop court, il faut au minimum 3 caractère",
    maxLength: "Le nom d'utilisateur est trop long, il faut au maximum 20 caractère"
    // TODO: Messages pour nom d'utilisateur
    // - required, minLength, maxLength
    // Hint: Les usernames ont généralement entre 3 et 20 caractères
  },

  password: {
    required: "Le mot de passe est vide",
    minLength: "Le mot de passe est trop court",
    weak: "Le mot de passe n'est pas assez complexe, un bon mot de passe doit avoir au moins 8+ caractères avec maj/min/chiffre"
    // TODO: Messages pour mot de passe
    // - required, minLength, weak (complexité)
    // Hint: Un bon mot de passe = 8+ caractères avec maj/min/chiffre
  },

  repeatPassword: {
    required: "Le mot de passe de validation est vide",
    mismatch: "Le mot de passe de validation ne correspond n'est pas identique au mot de passe"
    // TODO: Messages pour confirmation mot de passe
    // - required, mismatch (ne correspond pas)
  },

  rgpd: {

    // TODO: Message pour acceptation des conditions
  },

  // 🔐 Formulaire de connexion
  identifier: {
    required: "L'identifient est vide",
    invalidEmail: "L'email n'est pas valide utilisé le nom d’utilisateur si oublier",
    invalidUsername: "Le nom de l'utilisateur est invalide le l'email si oublier"
    // TODO: Messages pour champ email/username
    // - required, invalidEmail, invalidUsername
    // Hint: Ce champ peut accepter email OU username
  },
};

/**
 * ⚖️ Règles de validation par champ
 * Définit les contraintes techniques pour chaque champ
 */
export const validationRules = {
  // TODO: Définir les règles pour chaque champ
  // Structure : nomChamp: { minLength: nombre, maxLength: nombre, required: boolean }

  name: {
    minLength: 2
    // TODO: Règles pour le nom
    // Hint: minimum 2 caractères, obligatoire
  },

  email: {
    required: true
    // TODO: Règles pour l'email
    // Hint: Juste obligatoire, la regex s'occupe du format
  },

  subject: {
    minLength: 3
    // TODO: Règles pour le sujet
    // Hint: minimum 3 caractères
  },

  message: {
    minLength: 10
    // TODO: Règles pour le message
    // Hint: minimum 10 caractères pour un message utile
  },

  username: {
    minLength: 3,
    maxLength: 20
    // TODO: Règles pour nom d'utilisateur
    // Hint: entre 3 et 20 caractères
  },

  password: {
    minLength: 8,
    required: true
    // TODO: Règles pour mot de passe
    // Hint: minimum 8 caractères + complexité
  },
};

/**
 * 📊 Objets de retour standardisés pour les validations
 * Permet une gestion cohérente des résultats de validation
 */
export const validationResults = {
  // TODO: Créer des objets standardisés pour les retours

  success: {
    isValid: true,
    errorMessage: "Non valide"
    // TODO: Objet pour succès de validation
    // Hint: { isValid: boolean, errorMessage: string }
  },

  error: (message) => {
    // TODO: Fonction qui retourne un objet d'erreur
    // Paramètre: message d'erreur personnalisé
    // Hint: Retourne un objet avec isValid: false et le message
  },
};

/**
 * 🎨 Classes CSS pour les états visuels du formulaire
 * Centralise la gestion des styles selon l'état de validation
 */
export const cssClasses = {
  // TODO: Organiser les classes CSS par état

  error: {
    field: "border-red-500 bg-red-50",
    message: "text-red-600 text-sm mt-1",
  },

  success: {
    // TODO: Classes pour champ validé avec succès
    // Hint: border-green-500, bg-green-50
  },

  default: {
    // TODO: Classes par défaut et focus
    // Hint: border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500.
  },
};


/**
 * 📚 CONCEPTS À RETENIR :
 *
 * 1. **Centralisation** : Une seule source de vérité pour la config
 * 2. **Séparation** : Messages, règles et styles séparés
 * 3. **Évolutivité** : Facile d'ajouter de nouveaux champs/règles
 * 4. **Cohérence** : Mêmes règles = mêmes messages partout
 * 5. **Maintenance** : Un seul endroit à modifier pour tout changer
 */
