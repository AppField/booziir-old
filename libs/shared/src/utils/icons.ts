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
        case CocktailIcons.BEER:
            return faBeer
        case CocktailIcons.WINE_GLASS:
            return faWineGlass;
        case CocktailIcons.WHISKEY_GLASS_ROCKS:
            return faGlassWhiskeyRocks;
        case CocktailIcons.GLASS_WHISKEY:
            return faGlassWhiskey;
        case CocktailIcons.GLASS_MARTINI:
            return faGlassMartini;
        case CocktailIcons.GLASS_CHAMPAGNE:
            return faGlassChampagne;
        case CocktailIcons.GLASS:
            return faGlass;
        case CocktailIcons.COCKTAIL:
            return faCocktail;
        case CocktailIcons.GLASS_CITRUS:
            return faGlassCitrus;
        case CocktailIcons.FLASK_POISON:
            return faFlaskPoison;
        case CocktailIcons.FLASK_POTION:
            return faFlaskPotion;
        case CocktailIcons.MUG_HOT:
            return faMugHot;
        default:
            return faGlass
    }
}
