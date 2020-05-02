import {base_url,country_code,_api_key} from '../config/rest_config'
import {
    StyleSheet, 
    View,
    Alert,
    Text,
    
  } from 'react-native';
export async function getlistOfNews(category='general'){
    try {
        let articles = await fetch(`${base_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }

    
}