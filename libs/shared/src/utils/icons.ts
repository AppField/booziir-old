import {
    faWineGlass, faGlassCitrus, faCocktail, faGlassChampagne, faGlassMartini,
    faGlassWhiskeyRocks, faBeer, IconDefinition, faGlassWhiskey, faGlass, faFlaskPoison, faFlaskPotion, faMugHot
} from '@fortawesome/pro-light-svg-icons';

export enum CocktailIcons {
    BEER = 'beer',
    WINE_GLASS = 'wine-glass',
    WHISKEY_GLASS_ROCKS = 'whiskey-glass-rocks',
    GLASS_WHISKEY = 'glass-whiskey',
    GLASS_MARTINI = 'glass-martini',
    GLASS_CHAMPAGNE = 'glass-champagne',
    GLASS = 'glass',
    COCKTAIL = 'cocktail',
    GLASS_CITRUS = 'glass-citrus',
    FLASK_POISON = 'flask-poison',
    FLASK_POTION = 'flasK-potion',
    MUG_HOT = 'mug-hot'
}

export const getCocktailIcon = (icon: string): IconDefinition => {
    switch (icon) {
        case c.BEER:
            return faBeer
        case c.WINE_GLASS:
            return faWineGlass;
        case c.WHISKEY_GLASS_ROCKS:
            return faGlassWhiskeyRocks;
        case c.GLASS_WHISKEY:
            return faGlassWhiskey;
        case c.GLASS_MARTINI:
            return faGlassMartini;
        case c.GLASS_CHAMPAGNE:
            return faGlassChampagne;
        case c.GLASS:
            return faGlass;
        case c.COCKTAIL:
            return faCocktail;
        case c.GLASS_CITRUS:
            return faGlassCitrus;
        case c.FLASK_POISON:
            return faFlaskPoison;
        case c.FLASK_POTION:
            return faFlaskPotion;
        case c.MUG_HOT:
            return faMugHot;
        default:
            return faGlass
    }
}
