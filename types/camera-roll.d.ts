declare module '@react-native-camera-roll/camera-roll' {
    import { Asset } from 'react-native';

    namespace CameraRoll {
        function saveToCameraRoll(uri: string, type?: 'photo' | 'video'): Promise<string>;
        function save(tag: string, options?: { type?: 'photo' | 'video', album?: string }): Promise<string>;
        function getPhotos(params: GetPhotosParams): Promise<GetPhotosReturn>;
    }

    export = CameraRoll;

    interface GetPhotosParams {
        first: number;
        assetType?: 'Photos' | 'Videos' | 'All';
        groupTypes?: string;
        groupName?: string;
        after?: string;
        mimeTypes?: string[];
    }

    interface GetPhotosReturn {
        edges: PhotoIdentifier[];
        page_info: {
            has_next_page: boolean;
            end_cursor: string;
        };
    }

    interface PhotoIdentifier {
        node: {
            type: string;
            group_name: string;
            image: Asset;
            timestamp: number;
            location: any;
        };
    }
}
