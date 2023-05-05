var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATAS_ADMINISTRASI_KABUPATEN_AR_1 = new ol.format.GeoJSON();
var features_BATAS_ADMINISTRASI_KABUPATEN_AR_1 = format_BATAS_ADMINISTRASI_KABUPATEN_AR_1.readFeatures(json_BATAS_ADMINISTRASI_KABUPATEN_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMINISTRASI_KABUPATEN_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMINISTRASI_KABUPATEN_AR_1.addFeatures(features_BATAS_ADMINISTRASI_KABUPATEN_AR_1);
var lyr_BATAS_ADMINISTRASI_KABUPATEN_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_ADMINISTRASI_KABUPATEN_AR_1, 
                style: style_BATAS_ADMINISTRASI_KABUPATEN_AR_1,
                interactive: true,
                title: '<img src="styles/legend/BATAS_ADMINISTRASI_KABUPATEN_AR_1.png" /> BATAS_ADMINISTRASI_KABUPATEN_AR'
            });
var format_AdministrasiKecamatan_AR_2 = new ol.format.GeoJSON();
var features_AdministrasiKecamatan_AR_2 = format_AdministrasiKecamatan_AR_2.readFeatures(json_AdministrasiKecamatan_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKecamatan_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKecamatan_AR_2.addFeatures(features_AdministrasiKecamatan_AR_2);
var lyr_AdministrasiKecamatan_AR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdministrasiKecamatan_AR_2, 
                style: style_AdministrasiKecamatan_AR_2,
                interactive: true,
                title: '<img src="styles/legend/AdministrasiKecamatan_AR_2.png" /> Administrasi Kecamatan_AR'
            });
var lyr_MultiBencana_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Multi Bencana",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MultiBencana_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12400536.164321, -930782.551595, 12450836.164321, -881559.555465]
                            })
                        });
var lyr_CuacaEkstrim_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cuaca Ekstrim",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CuacaEkstrim_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12400536.164321, -930782.551595, 12450836.164321, -881559.555465]
                            })
                        });
var lyr_Banjir_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Banjir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Banjir_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12400536.164321, -930782.551595, 12450836.164321, -881559.555465]
                            })
                        });
var lyr_GempaBumi_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Gempa Bumi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GempaBumi_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12400608.484463, -930764.366639, 12450808.484463, -881642.031484]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BATAS_ADMINISTRASI_KABUPATEN_AR_1.setVisible(true);lyr_AdministrasiKecamatan_AR_2.setVisible(true);lyr_MultiBencana_3.setVisible(true);lyr_CuacaEkstrim_4.setVisible(true);lyr_Banjir_5.setVisible(true);lyr_GempaBumi_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BATAS_ADMINISTRASI_KABUPATEN_AR_1,lyr_AdministrasiKecamatan_AR_2,lyr_MultiBencana_3,lyr_CuacaEkstrim_4,lyr_Banjir_5,lyr_GempaBumi_6];
lyr_BATAS_ADMINISTRASI_KABUPATEN_AR_1.set('fieldAliases', {'Sumber_Dat': 'Sumber_Dat', 'Luas_Ha': 'Luas_Ha', 'Kabupaten': 'Kabupaten', });
lyr_AdministrasiKecamatan_AR_2.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Sumber_Dat': 'Sumber_Dat', 'Luas_Ha': 'Luas_Ha', });
lyr_BATAS_ADMINISTRASI_KABUPATEN_AR_1.set('fieldImages', {'Sumber_Dat': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Kabupaten': 'TextEdit', });
lyr_AdministrasiKecamatan_AR_2.set('fieldImages', {'Kecamatan': 'TextEdit', 'Sumber_Dat': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_BATAS_ADMINISTRASI_KABUPATEN_AR_1.set('fieldLabels', {'Sumber_Dat': 'inline label', 'Luas_Ha': 'no label', 'Kabupaten': 'no label', });
lyr_AdministrasiKecamatan_AR_2.set('fieldLabels', {'Kecamatan': 'inline label', 'Sumber_Dat': 'no label', 'Luas_Ha': 'no label', });
lyr_AdministrasiKecamatan_AR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});